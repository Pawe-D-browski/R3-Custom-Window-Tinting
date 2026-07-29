export default function LocationIframe() {
  return (
    <iframe
      src={`https://maps.google.com/maps?q=${"R3 Custom Window Tinting"}&z=13&output=embed`}
      style={{
        border: "none",
        borderRadius: "var(--radius-4)",
        backgroundColor: "var(--gray-2)",
        display: "block",
        flex: "1",
        width: "100%",
        height: "100%",
        minHeight: "350px",
        userSelect: "none",
      }}
      loading="eager"
      referrerPolicy="no-referrer"
    />
  );
}
