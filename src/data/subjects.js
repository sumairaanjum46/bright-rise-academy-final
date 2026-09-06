// Content for the dedicated subject pages (/math-tutoring, /science-tutoring,
// /english-classes, /coding-classes). Kept as data so the page template
// (SubjectPage.jsx) stays in one place, while every subject still gets
// genuinely different copy — nothing here is templated by find/replace.

export const SUBJECTS = {
  math: {
    slug: "math-tutoring",
    name: "Mathematics",
    shortName: "Math",
    h1: "Online Math Tutoring for Students",
    metaTitle: "Online Math Tutoring | BrightRise Academy",
    metaDescription:
      "One-on-one online math tutoring for Kindergarten through Grade 10. Personalized, live sessions that build real understanding, not just answers.",
    intro:
      "Math tends to build on itself — a gap in one topic can make the next one feel impossible. Our online math tutoring gives each student a live, one-on-one session with a tutor who can slow down, re-explain, and work through problems at the student's own pace.",
    whoFor:
      "This is a good fit for students who are falling behind in class, students who understand the material but want to move faster, and students who simply do better with individual attention than in a large classroom.",
    whatYouLearn: [
      "Number sense, arithmetic, and mental math strategies",
      "Fractions, decimals, and percentages",
      "Pre-algebra and algebra",
      "Geometry and measurement",
      "Word problems and applied problem-solving",
      "Exam and homework preparation",
    ],
    howItWorks:
      "Sessions are held live online, one-on-one. Your tutor works through problems with your student in real time, checks understanding as they go, and adjusts the pace based on how the student is doing — rather than following a fixed script.",
    benefits: [
      "Personalized pacing instead of a fixed classroom schedule",
      "A tutor who can re-explain a concept as many times as needed",
      "Lessons that can align with what the student is currently studying at school",
      "A private setting where it's easier to ask questions without hesitation",
    ],
    faqs: [
      {
        q: "What math topics do you cover?",
        a: "Topics span arithmetic, fractions and decimals, algebra, geometry, equations, and problem-solving, tailored to the student's grade level.",
      },
      {
        q: "What grades do you tutor in math?",
        a: "We support math tutoring from Kindergarten through Grade 10.",
      },
      {
        q: "Can lessons follow my child's school curriculum?",
        a: "Yes. Tutors shape lessons around what your student is currently studying at school where possible.",
      },
      {
        q: "Are math sessions one-on-one?",
        a: "Yes. Every session is a live, one-on-one session between the student and their tutor.",
      },
    ],
  },

  science: {
    slug: "science-tutoring",
    name: "Science",
    shortName: "Science",
    h1: "Online Science Tutoring for Students",
    metaTitle: "Online Science Tutoring | BrightRise Academy",
    metaDescription:
      "Live one-on-one online science tutoring for K–10 students, covering general science, biology, chemistry, physics, and earth science.",
    intro:
      "Science is easiest to understand when a student can ask questions and see ideas connected to the real world, rather than just memorizing definitions. Our online science tutoring is one-on-one and live, so a tutor can adjust explanations to how your student actually thinks.",
    whoFor:
      "Well suited to students who want extra support understanding classroom material, students preparing for tests, and students who are curious about science and want to go a little deeper than the school syllabus allows.",
    whatYouLearn: [
      "General science foundations for younger students",
      "Biology: living systems, the human body, ecosystems",
      "Chemistry: matter, reactions, and the periodic table",
      "Physics: forces, energy, and motion",
      "Earth and space science",
      "Scientific thinking and how to approach experiments and questions",
    ],
    howItWorks:
      "Your student meets their tutor live online for one-on-one sessions. Tutors explain concepts, work through diagrams and examples together, and check in regularly to make sure the ideas are actually landing, not just being repeated back.",
    benefits: [
      "Concepts explained clearly, at a pace that matches the student",
      "One-on-one attention rather than a shared classroom pace",
      "Lessons that can be aligned with current school topics",
      "A comfortable space for students to ask questions freely",
    ],
    faqs: [
      {
        q: "What science topics do you teach?",
        a: "Topics include general science, biology, chemistry, physics, and earth and space science, adapted to the student's grade level.",
      },
      {
        q: "What grades do you tutor in science?",
        a: "We support science tutoring from Kindergarten through Grade 10.",
      },
      {
        q: "Is science tutoring one-on-one?",
        a: "Yes, every science session is live and one-on-one with a dedicated tutor.",
      },
      {
        q: "Can the sessions match what my child is studying at school?",
        a: "Yes. Tutors aim to align lessons with the student's school curriculum where possible.",
      },
    ],
  },

  english: {
    slug: "english-classes",
    name: "English",
    shortName: "English",
    h1: "Online English Classes for Kids",
    metaTitle: "Online English Classes for Kids | BrightRise Academy",
    metaDescription:
      "Live one-on-one online English classes for K–10 students, covering reading comprehension, writing, grammar, and vocabulary.",
    intro:
      "Strong English skills — reading, writing, and grammar — support every other subject a student studies. Our online English classes are live and one-on-one, so a tutor can focus directly on where a student needs the most support.",
    whoFor:
      "Good for students working on reading comprehension, students who need help structuring their writing, and students who want steady, individual practice with grammar and vocabulary.",
    whatYouLearn: [
      "Reading comprehension and analysis",
      "Writing and composition, from sentences to essays",
      "Grammar and sentence structure",
      "Vocabulary building",
      "Literature discussion at an age-appropriate level",
    ],
    howItWorks:
      "Sessions happen live online, one-on-one. A tutor reads and writes alongside the student, gives feedback in real time, and adjusts what's covered based on the student's current reading and writing level.",
    benefits: [
      "Individual feedback on writing, rather than generic corrections",
      "A pace set by the student's own reading level",
      "A private setting that makes it easier to practice out loud",
      "Lessons that can connect to school assignments and reading lists",
    ],
    faqs: [
      {
        q: "What does the English class cover?",
        a: "Classes cover reading comprehension, writing and composition, grammar, vocabulary building, and literature, based on the student's level.",
      },
      {
        q: "What grades do you teach English for?",
        a: "We teach English from Kindergarten through Grade 10.",
      },
      {
        q: "Are English classes one-on-one?",
        a: "Yes, every class is a live, one-on-one session with a tutor.",
      },
      {
        q: "Can tutoring help with school essays and assignments?",
        a: "Yes. Tutors can work with students on current school assignments as part of their sessions.",
      },
    ],
  },

  coding: {
    slug: "coding-classes",
    name: "Coding",
    shortName: "Coding",
    h1: "Online Coding Classes for Kids",
    metaTitle: "Online Coding Classes for Kids | BrightRise Academy",
    metaDescription:
      "Live one-on-one online coding classes for kids, covering programming fundamentals, Python, and computational thinking, beginner-friendly.",
    intro:
      "Coding rewards patient, step-by-step practice — which is exactly what a one-on-one live class is built for. Our online coding classes let a student write real code, get stuck, and work through it with a tutor right there.",
    whoFor:
      "Designed for beginners with no prior coding experience, as well as students who've started learning on their own and want structured, one-on-one guidance to keep progressing.",
    whatYouLearn: [
      "Programming fundamentals: variables, loops, and conditionals",
      "Python basics",
      "Computational and logical thinking",
      "Debugging and problem-solving habits",
      "Beginner-friendly, hands-on coding projects",
    ],
    howItWorks:
      "Classes are live and one-on-one online. Students code alongside their tutor, ask questions as they come up, and build small projects that reinforce what they've just learned.",
    benefits: [
      "Hands-on practice instead of only watching demonstrations",
      "A tutor available to help the moment something doesn't work",
      "A pace suited to a true beginner or a student with some experience",
      "Projects that make abstract concepts concrete",
    ],
    faqs: [
      {
        q: "Do students need coding experience to start?",
        a: "No. Classes are beginner-friendly and suitable for students with no prior coding experience.",
      },
      {
        q: "What will my child learn in coding classes?",
        a: "Classes cover programming fundamentals, Python, computational thinking, and beginner-friendly coding projects.",
      },
      {
        q: "Are coding classes one-on-one?",
        a: "Yes, every class is a live, one-on-one session with a tutor.",
      },
      {
        q: "What age group are coding classes for?",
        a: "Coding classes are beginner-friendly and open to students across our K–10 age range.",
      },
    ],
  },
};

export const SUBJECT_LIST = Object.values(SUBJECTS);
