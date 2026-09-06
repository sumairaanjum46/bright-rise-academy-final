// Content for /grades and /grades/grade-1 .. /grades/grade-10.
// Ranges are described generally ("typically") since school systems and
// curricula vary by country — never presented as a fixed national standard.

export const GRADES = [
  {
    slug: "grade-1",
    number: 1,
    label: "Grade 1",
    band: "Elementary",
    typicalAge: "around 6–7 years old",
    overview:
      "Grade 1 is where students move from early learning into more structured reading, writing, and number work. One-on-one tutoring at this stage is mostly about building comfort and confidence with these new skills.",
    topics: {
      Mathematics: "counting, basic addition and subtraction, and early number sense",
      English: "phonics, early reading, and simple sentence writing",
      Science: "introductory science concepts about the world around them",
    },
    howTutoringHelps:
      "A one-on-one tutor can go at exactly the pace a Grade 1 student needs — repeating a concept as many times as it takes, and celebrating small wins that build a student's confidence early on.",
  },
  {
    slug: "grade-2",
    number: 2,
    label: "Grade 2",
    band: "Elementary",
    typicalAge: "around 7–8 years old",
    overview:
      "Grade 2 typically builds on the reading and number foundations from Grade 1, with students starting to read more independently and work with slightly larger numbers.",
    topics: {
      Mathematics: "addition, subtraction, place value, and an introduction to basic measurement",
      English: "reading comprehension, vocabulary, and short writing pieces",
      Science: "simple science topics such as plants, animals, and weather",
    },
    howTutoringHelps:
      "Individual attention helps make sure a student is genuinely reading with understanding — not just decoding words — before moving on to more advanced material.",
  },
  {
    slug: "grade-3",
    number: 3,
    label: "Grade 3",
    band: "Elementary",
    typicalAge: "around 8–9 years old",
    overview:
      "Grade 3 often introduces multiplication and division alongside more demanding reading and writing tasks, which is where many students first need extra support.",
    topics: {
      Mathematics: "multiplication, division, fractions basics, and word problems",
      English: "reading comprehension, paragraph writing, and grammar basics",
      Science: "general science topics, often including basic biology and earth science",
    },
    howTutoringHelps:
      "A tutor can spend extra time on multiplication and division specifically, since a shaky foundation here tends to affect math confidence for years afterward.",
  },
  {
    slug: "grade-4",
    number: 4,
    label: "Grade 4",
    band: "Elementary",
    typicalAge: "around 9–10 years old",
    overview:
      "Grade 4 typically asks students to work with larger numbers, more complex fractions, and longer reading and writing assignments.",
    topics: {
      Mathematics: "multi-digit arithmetic, fractions, and decimals",
      English: "reading comprehension, essay structure, and grammar",
      Science: "topics that may include basic chemistry, biology, or earth science",
      Coding: "an optional introduction to programming fundamentals for interested students",
    },
    howTutoringHelps:
      "One-on-one sessions help identify exactly which concept is causing difficulty — for example, a specific type of fraction problem — rather than re-teaching everything at once.",
  },
  {
    slug: "grade-5",
    number: 5,
    label: "Grade 5",
    band: "Elementary",
    typicalAge: "around 10–11 years old",
    overview:
      "Grade 5 is often the last year of elementary school, with students preparing for the jump to middle school work across math, science, and English.",
    topics: {
      Mathematics: "fractions, decimals, percentages, and early pre-algebra thinking",
      English: "reading comprehension, essay writing, and grammar review",
      Science: "biology, earth science, and introductory physical science",
      Coding: "programming fundamentals for students who want to start coding",
    },
    howTutoringHelps:
      "A tutor can help a Grade 5 student solidify fractions, decimals, and percentages specifically — topics that come up constantly once algebra begins.",
  },
  {
    slug: "grade-6",
    number: 6,
    label: "Grade 6",
    band: "Middle School",
    typicalAge: "around 11–12 years old",
    overview:
      "Grade 6 often marks the start of middle school, where coursework becomes more independent and subjects like math and science become noticeably more abstract.",
    topics: {
      Mathematics: "ratios, early algebra concepts, and geometry basics",
      English: "reading analysis, essay writing, and grammar",
      Science: "biology, chemistry, or physics topics depending on the school",
      Coding: "programming fundamentals and beginner Python",
    },
    howTutoringHelps:
      "One-on-one tutoring can bridge the gap between concrete elementary math and the more abstract thinking middle school introduces.",
  },
  {
    slug: "grade-7",
    number: 7,
    label: "Grade 7",
    band: "Middle School",
    typicalAge: "around 12–13 years old",
    overview:
      "Grade 7 typically deepens algebra and geometry work, and asks students to write and reason at a more advanced level across subjects.",
    topics: {
      Mathematics: "pre-algebra to early algebra, geometry, and equations",
      English: "essay writing, literature analysis, and grammar",
      Science: "biology, chemistry, or physics, depending on the school's sequence",
      Coding: "programming fundamentals and problem-solving with code",
    },
    howTutoringHelps:
      "A tutor can work through algebra step by step, which is often where students either build strong momentum or start to fall behind.",
  },
  {
    slug: "grade-8",
    number: 8,
    label: "Grade 8",
    band: "Middle School",
    typicalAge: "around 13–14 years old",
    overview:
      "Grade 8 often finishes middle school with more formal algebra, deeper science topics, and preparation for high school-level work.",
    topics: {
      Mathematics: "algebra, geometry, and equations",
      English: "literature, essay writing, and advanced grammar",
      Science: "biology, chemistry, and physics topics",
      Coding: "programming fundamentals, Python, and computational thinking",
    },
    howTutoringHelps:
      "Individual sessions help make sure the algebra foundation is solid before a student moves into high school math, where the pace usually picks up.",
  },
  {
    slug: "grade-9",
    number: 9,
    label: "Grade 9",
    band: "High School",
    typicalAge: "around 14–15 years old",
    overview:
      "Grade 9 typically marks the start of high school, with more demanding coursework in math, science, and English, and higher expectations for independent work.",
    topics: {
      Mathematics: "algebra, geometry, and the foundations of advanced mathematics",
      English: "literature analysis, essay writing, and composition",
      Science: "biology, chemistry, or physics at a high-school level",
      Coding: "programming fundamentals, Python, and applied problem-solving",
    },
    howTutoringHelps:
      "A one-on-one tutor can help a Grade 9 student adjust to the faster pace and higher expectations of high school, subject by subject.",
  },
  {
    slug: "grade-10",
    number: 10,
    label: "Grade 10",
    band: "High School",
    typicalAge: "around 15–16 years old",
    overview:
      "Grade 10 typically involves more advanced mathematics, deeper science coursework, and higher-level reading and writing expectations.",
    topics: {
      Mathematics: "advanced algebra, geometry, and problem solving",
      English: "literature, advanced essay writing, and composition",
      Science: "biology, chemistry, or physics at a more advanced level",
      Coding: "programming fundamentals, Python, and computational thinking",
    },
    howTutoringHelps:
      "One-on-one support at this level focuses on strengthening specific weak spots and building the confidence to tackle harder coursework independently.",
  },
];

export function getGradeBySlug(slug) {
  return GRADES.find((g) => g.slug === slug) || null;
}
