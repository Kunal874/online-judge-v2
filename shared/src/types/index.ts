export const LANGUAGES = ["CPP", "C", "JAVA", "PYTHON"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DIFFICULTIES = ["EASY", "MEDIUM", "HARD"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export const VERDICTS = [
  "PENDING",
  "RUNNING",
  "ACCEPTED",
  "WRONG_ANSWER",
  "COMPILE_ERROR",
  "RUNTIME_ERROR",
  "TIME_LIMIT_EXCEEDED",
  "MEMORY_LIMIT_EXCEEDED",
  "INTERNAL_ERROR",
] as const;
export type Verdict = (typeof VERDICTS)[number];
