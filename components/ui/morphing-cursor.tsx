"use client"

import type React from "react"
import { useRef, useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MagneticTextProps {
  text: string
  hoverText?: string
  className?: string
}

export function MagneticText({
  text = "CREATIVE",
  hoverText = "EXPLORE",
  className,
}: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const innerTextRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [blobSize, setBlobSize] = useState(0)

  // Separate lerp targets: mouse â†’ blob lags behind
  const mousePos = useRef({ x: 0, y: 0 })
  const blobPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()
  const targetSize = useRef(0)
  const currentSize = useRef(0)

  /* â”€â”€ Size observer â”€â”€ */
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  /* â”€â”€ Animation loop â”€â”€ */
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const loop = () => {
      // blob position lerps toward mouse (slow = dragging effect)
      blobPos.current.x = lerp(blobPos.current.x, mousePos.current.x, 0.08)
      blobPos.current.y = lerp(blobPos.current.y, mousePos.current.y, 0.08)

      // blob size lerps
      currentSize.current = lerp(currentSize.current, targetSize.current, 0.09)

      const cx = blobPos.current.x
      const cy = blobPos.current.y
      const sz = currentSize.current

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
        blobRef.current.style.width = `${sz}px`
        blobRef.current.style.height = `${sz}px`
      }

      if (innerTextRef.current) {
        // counter-transform keeps inner text at container center
        innerTextRef.current.style.transform = `translate(${-cx}px, ${-cy}px)`
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
        glowRef.current.style.width = `${sz * 1.6}px`
        glowRef.current.style.height = `${sz * 1.6}px`
        glowRef.current.style.opacity = isHovered ? "1" : "0"
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isHovered])

  /* â”€â”€ Mouse handlers â”€â”€ */
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const r = containerRef.current.getBoundingClientRect()
    mousePos.current = { x: e.clientX - r.left, y: e.clientY - r.top }
  }, [])

  const onEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const r = containerRef.current.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    mousePos.current = { x, y }
    blobPos.current = { x, y }
    targetSize.current = 190
    setIsHovered(true)
  }, [])

  const onLeave = useCallback(() => {
    targetSize.current = 0
    setIsHovered(false)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        "relative inline-flex items-center justify-center cursor-none select-none overflow-hidden",
        className
      )}
      style={{ padding: "0.5rem 1.5rem" }}
    >
      {/* â”€â”€ Outer glow that trails behind blob â”€â”€ */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 70%)",
          filter: "blur(12px)",
          transition: "opacity 0.4s ease",
          willChange: "transform, width, height",
        }}
      />

      {/* â”€â”€ Blob (clip window) â”€â”€ */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 pointer-events-none rounded-full overflow-hidden"
        style={{
          width: 0,
          height: 0,
          boxShadow: "0 0 32px 4px rgba(249,115,22,0.5), 0 0 0 1.5px rgba(249,115,22,0.6)",
          background: "#f97316",
          willChange: "transform, width, height",
        }}
      >
        {/* â”€â”€ Inner alternate text (counter-positioned) â”€â”€ */}
        <div
          ref={innerTextRef}
          className="absolute flex items-center justify-center"
          style={{
            width: containerSize.width,
            height: containerSize.height,
            top: "50%",
            left: "50%",
            willChange: "transform",
          }}
        >
          <span
            className="font-black text-white whitespace-nowrap"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {hoverText}
          </span>
        </div>
      </div>

      {/* â”€â”€ Base text â”€â”€ */}
      <span
        className="relative z-10 font-black text-white whitespace-nowrap"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          letterSpacing: isHovered ? "-0.04em" : "-0.02em",
          transition: "letter-spacing 0.4s ease",
          textShadow: isHovered
            ? "0 0 40px rgba(249,115,22,0.4)"
            : "none",
        }}
      >
        {text}
      </span>
    </div>
  )
}
