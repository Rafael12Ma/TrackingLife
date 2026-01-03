import { questions } from "./questions";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center gap-12 px-4 py-10 mx-auto w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-10">Questions</h1>
        {questions.map((q) => (
          <div
            key={q.question}
            className="flex items-start gap-3 w-full border-l-4 border-black bg-white p-4 rounded-md shadow-sm"
          >
            <div className="flex flex-col gap-1">
              <label className="text-2xl font-semibold font-sans">
                {q.question}
              </label>
              <h1>{q.answer}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
