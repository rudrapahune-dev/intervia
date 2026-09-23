import {
  Bot,
  Mic,
  MicOff,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { useState } from "react";

function InterviewRoom() {
  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState("");

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-zinc-900 px-6 py-5 md:px-10">

        <div>
          <p className="text-lg font-semibold tracking-tight">
            INTERVIA
          </p>

          <p className="text-xs text-zinc-600">
            Technical Interview
          </p>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden text-right sm:block">
            <p className="text-xs text-zinc-600">
              QUESTION
            </p>

            <p className="text-sm text-zinc-300">
              1 / 10
            </p>
          </div>

          <div className="h-2 w-2 rounded-full bg-green-500" />

        </div>

      </header>

      {/* Main interview area */}
      <div className="mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl flex-col px-6 py-8 md:px-10">

        {/* Interview status */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Interview in progress
          </div>

          <button
            className="flex items-center gap-2 rounded-full border border-red-900/50 px-4 py-2 text-sm text-red-400 transition hover:bg-red-950/30"
          >
            <Phone size={15} />
            End interview
          </button>

        </div>

        {/* Conversation */}
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center py-16">

          {/* AI message */}
          <div className="flex gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
              <Bot size={19} className="text-zinc-300" />
            </div>

            <div className="max-w-2xl">

              <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                AI Interviewer
              </p>

              <p className="mt-3 text-xl leading-9 text-zinc-100 md:text-2xl">
                Can you explain how you would design a scalable REST API for a
                backend application?
              </p>

            </div>

          </div>

          {/* User response */}
          <div className="mt-12 flex justify-end">

            <div className="max-w-xl rounded-3xl border border-zinc-800 bg-zinc-950 p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800">
                  <UserRound size={17} />
                </div>

                <div>
                  <p className="text-xs text-zinc-600">
                    YOUR RESPONSE
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {answer
                      ? "Answer ready"
                      : "Your response will appear here"}
                  </p>
                </div>

              </div>

              {answer && (
                <p className="mt-4 text-sm leading-6 text-zinc-300">
                  {answer}
                </p>
              )}

            </div>

          </div>

        </div>

        {/* Input area */}
        <div className="mx-auto w-full max-w-3xl pb-6">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-3">

            <textarea
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="Type your answer..."
              rows={3}
              className="w-full resize-none bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-700"
            />

            <div className="mt-3 flex items-center justify-between">

              <button
                onClick={() => setIsListening(!isListening)}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
                  isListening
                    ? "border-white bg-white text-black"
                    : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                }`}
                aria-label={
                  isListening
                    ? "Stop listening"
                    : "Start voice input"
                }
              >
                {isListening ? (
                  <MicOff size={19} />
                ) : (
                  <Mic size={19} />
                )}
              </button>

              <button
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Send
                <Send size={15} />
              </button>

            </div>

          </div>

          <p className="mt-3 text-center text-xs text-zinc-700">
            You can type your answer or use your microphone.
          </p>

        </div>

      </div>
    </main>
  );
}

export default InterviewRoom;