const az900 = "https://docs.microsoft.com/en-us/certifications/exams/az-900";
const az204 = "https://docs.microsoft.com/en-us/certifications/exams/az-900";
const az400 = "https://docs.microsoft.com/en-us/certifications/exams/az-400";

export default function Hero() {
    return (
      <header className="bg-base-200 py-10">
          <div className="max-w-screen-md mx-auto text-center">
            <h1 className="text-5xl font-bold">Azure DevOps</h1>
            <p className="py-6">Flashcards to help with <a className="link link-primary" href={az900}>AZ-900</a>, <a className="link link-primary" href={az204}>AZ-204</a> and <a className="link link-primary" href={az400}>AZ-400</a>.</p>
          </div>
      </header>
    );
  }