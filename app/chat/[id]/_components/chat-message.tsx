import { cn } from "@/lib/utils/tailwind.utils";

/**
 *
 * @param date  - date string
 * @returns   - time string
 * @example getChatTime('2021-08-01T12:00:00') // 12:00
 */
function getChatTime(date: string): string {
  return new Date(date).toTimeString().slice(0, 5);
}

export function DateMessage({ date }: { date: string }): JSX.Element {
  return (
    <span className="text-sm text-white bg-neutral-400/60 px-2 py-1 rounded-full w-fit">
      {date}
    </span>
  );
}

export function SystemMessage({ message }: { message: string }): JSX.Element {
  return <p className="text-sm text-neutral-500 p-1">{message}</p>;
}

export function UserMessage({
  message,
  time,
  isMe,
}: {
  message: string;
  time: string;
  isMe?: boolean;
}): JSX.Element {
  return (
    <div
      className={cn(
        "flex gap-1 items-end",
        isMe ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div
        className={cn(
          "py-2 px-3 rounded-2xl",
          isMe ? "bg-green-500 text-white" : "bg-neutral-300",
        )}
      >
        {message}
      </div>
      <div
        className={cn("flex flex-col gap-1", isMe ? "text-right" : "text-left")}
      >
        <div className="text-sm leading-none text-neutral-600 font-medium">
          보냄
        </div>
        <div className="text-sm leading-none text-neutral-500">
          {getChatTime(time)}
        </div>
      </div>
    </div>
  );
}

export default function ChatMessage({
  message,
  type,
  time,
  isMe,
}: {
  message: string;
  type: string;
  time: string;
  isMe: boolean;
}): JSX.Element {
  if (type === "date") {
    return <DateMessage date={message} />;
  }
  if (type === "system") {
    return <SystemMessage message={message} />;
  }
  return <UserMessage isMe={isMe} message={message} time={time} />;
}