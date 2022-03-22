export const parseDate = (created_at: string) => {
  const date = new Date(created_at);
  const options = { year: "numeric", month: "short", day: "numeric" } as const;

  return date.toLocaleDateString("en-US", options)
}