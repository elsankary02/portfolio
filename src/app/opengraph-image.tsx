import fs from "fs";
import { ImageResponse } from "next/og";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photoPath = path.join(
    process.cwd(),
    "public/images/my_image/my_image.JPEG",
  );
  const photoBuffer = fs.readFileSync(photoPath);
  const photoBase64 = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, #09090B 0%, #18181B 50%, #09090B 100%)",
        fontFamily: "system-ui, sans-serif",
        color: "#FAFAFA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(6,182,212,0.16) 50%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          width: "100%",
          height: 4,
          background: "linear-gradient(90deg, #3B82F6, #06B6D4, #2563EB)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0 80px",
          gap: 60,
        }}
      >
        {/* Profile photo */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "4px solid rgba(59,130,246,0.5)",
            overflow: "hidden",
            display: "flex",
            flexShrink: 0,
            boxShadow: "0 0 60px rgba(59,130,246,0.3)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoBase64}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              display: "flex",
              gap: 16,
            }}
          >
            <span>Mohamed</span>
            <span style={{ color: "#60A5FA" }}>Ibrahim</span>
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#60A5FA",
              letterSpacing: "0.02em",
            }}
          >
            Junior Flutter Developer
          </div>
          <div
            style={{
              fontSize: 18,
              color: "rgba(250,250,250,0.6)",
              marginTop: 4,
              maxWidth: 500,
              lineHeight: 1.4,
            }}
          >
            Building scalable production apps for Android & iOS with Clean
            Architecture
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 16,
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#3B82F6",
                background: "rgba(59,130,246,0.15)",
                padding: "6px 16px",
                borderRadius: 20,
                border: "1px solid rgba(59,130,246,0.3)",
              }}
            >
              Flutter
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#3B82F6",
                background: "rgba(59,130,246,0.15)",
                padding: "6px 16px",
                borderRadius: 20,
                border: "1px solid rgba(59,130,246,0.3)",
              }}
            >
              Dart
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#3B82F6",
                background: "rgba(59,130,246,0.15)",
                padding: "6px 16px",
                borderRadius: 20,
                border: "1px solid rgba(59,130,246,0.3)",
              }}
            >
              Swift
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 80px",
          borderTop: "1px solid rgba(250,250,250,0.08)",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "rgba(250,250,250,0.35)",
            letterSpacing: "0.1em",
          }}
        >
          mohamedelsankary.dev
        </span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
