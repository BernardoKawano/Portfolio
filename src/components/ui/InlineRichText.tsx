import type { RichText } from "@/content/projects";

type InlineRichTextProps = {
  value: RichText;
  strongClassName?: string;
};

export function InlineRichText({
  value,
  strongClassName = "font-semibold text-fg-primary",
}: InlineRichTextProps) {
  if (typeof value === "string") return <>{value}</>;

  return (
    <>
      {value.map((segment, index) =>
        segment.strong ? (
          <strong key={`${index}-${segment.text}`} className={strongClassName}>
            {segment.text}
          </strong>
        ) : (
          <span key={`${index}-${segment.text}`}>{segment.text}</span>
        )
      )}
    </>
  );
}
