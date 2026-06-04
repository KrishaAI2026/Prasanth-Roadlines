"use client"

import { useEffect, useRef, useState } from "react"

type CursorState = "default" | "hover" | "image" | "hidden"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: -200, y: -200 })
  const ring = useRef({ x: -200, y: -200 })
  const raf = useRef<number>()

  const [state, setState] = useState<CursorState>("hidden")
  const [label, setLabel] = useState("")

  useEffect(() => {
    // hide native cursor site-wide
    document.documentElement.classList.add("custom-cursor-active")

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (state === "hidden") setState("default")
    }

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "a, button, [role='button'], input, textarea, select, label"
      )
      const imgEl = (e.target as HTMLElement).closest(
        "img, [data-cursor='image'], .bento-image"
      )
      if (el) {
        setState("hover")
        setLabel("")
      } else if (imgEl) {
        setState("image")
        setLabel("VIEW")
      } else {
        setState("default")
        setLabel("")
      }
    }

    const onLeave = () => setState("hidden")
    const onEnter = () => setState("default")

    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      cancelAnimationFrame(raf.current!)
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [state])

  const isHidden = state === "hidden"
  const isHover = state === "hover"
  const isImage = state === "image"

  return (
    <>
      {/* â”€â”€ Dot â”€â”€ */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            width: isHover ? "6px" : isImage ? "0px" : "8px",
            height: isHover ? "6px" : isImage ? "0px" : "8px",
            background: isHover ? "#f97316" : "#f97316",
            borderRadius: "50%",
            opacity: isHidden ? 0 : 1,
            transition:
              "width 0.25s cubic-bezier(0.25,1,0.5,1), height 0.25s cubic-bezier(0.25,1,0.5,1), opacity 0.2s",
            marginTop: "-4px",
            marginLeft: "-4px",
          }}
        />
      </div>

      {/* â”€â”€ Ring â”€â”€ */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            width: isImage ? "80px" : isHover ? "44px" : "34px",
            height: isImage ? "80px" : isHover ? "44px" : "34px",
            border: isHover ? "2px solid #f97316" : "1.5px solid rgba(255,255,255,0.55)",
            background: isHover
              ? "rgba(249,115,22,0.12)"
              : isImage
              ? "rgba(255,255,255,0.08)"
              : "transparent",
            borderRadius: "50%",
            opacity: isHidden ? 0 : 1,
            transition:
              "width 0.4s cubic-bezier(0.25,1,0.5,1), height 0.4s cubic-bezier(0.25,1,0.5,1), background 0.3s, border-color 0.3s, opacity 0.2s",
            /* negative margin to center */
            marginTop: isImage ? "-40px" : isHover ? "-22px" : "-17px",
            marginLeft: isImage ? "-40px" : isHover ? "-22px" : "-17px",
          }}
        />
      </div>

      {/* â”€â”€ Image-state label â”€â”€ */}
      <div
        ref={labelRef}
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            opacity: isImage ? 1 : 0,
            transition: "opacity 0.25s",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "white",
            whiteSpace: "nowrap",
            transform: "translateX(-50%) translateY(-50%)",
          }}
        >
          {label}
        </div>
      </div>
    </>
  )
}
