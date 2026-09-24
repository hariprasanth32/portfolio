import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  type: z.string().min(1),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(1000),
});

const types = ["Network setup", "Troubleshooting", "Cloud / DevOps", "Full-time role", "Other"];

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", type: types[0], message: "" });
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "email" | "type" | "message", string>>
  >({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(values);
    if (!r.success) {
      const errs: Partial<Record<"name" | "email" | "type" | "message", string>> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as "name"] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = r.data;
    const subject = encodeURIComponent(`Project inquiry: ${d.type} — ${d.name}`);
    const body = encodeURIComponent(`${d.message}\n\n— ${d.name}\n${d.email}`);
    window.location.href = `mailto:shariprasanth28@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full border-b border-ink-border bg-transparent py-3 text-ink-foreground outline-none transition-colors placeholder:text-ink-muted focus:border-primary";

  if (sent)
    return (
      <div className="contact-card flex min-h-[420px] flex-col items-center justify-center text-center animate-fade-in">
        <CheckCircle2 className="icon-pop h-14 w-14 text-primary" />
        <h3 className="mt-6 font-display text-3xl font-bold">Message ready to send!</h3>
        <p className="mt-3 max-w-sm text-ink-muted">
          Your email app opened with the inquiry. Hari usually replies within 24 hours.
        </p>
        <Button
          className="mt-8"
          variant="outline"
          onClick={() => {
            setSent(false);
            setValues({ name: "", email: "", type: types[0], message: "" });
          }}
        >
          Send another
        </Button>
      </div>
    );

  return (
    <form onSubmit={submit} noValidate className="contact-card space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">Name</span>
          <input
            className={field}
            value={values.name}
            onChange={set("name")}
            placeholder="Your name"
            maxLength={100}
          />
          {errors.name && (
            <span className="mt-1 block text-xs text-destructive">{errors.name}</span>
          )}
        </label>
        <label className="block">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">Email</span>
          <input
            type="email"
            className={field}
            value={values.email}
            onChange={set("email")}
            placeholder="you@company.com"
            maxLength={255}
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-destructive">{errors.email}</span>
          )}
        </label>
      </div>
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
          Project type
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setValues((v) => ({ ...v, type: t }))}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${values.type === t ? "border-primary bg-primary text-primary-foreground scale-105" : "border-ink-border hover:border-primary"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <label className="block">
        <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">Message</span>
        <textarea
          rows={4}
          className={`${field} resize-none`}
          value={values.message}
          onChange={set("message")}
          placeholder="Tell me about your project, timeline and goals…"
          maxLength={1000}
        />
        <span className="mt-1 flex justify-between text-xs">
          <span className="text-destructive">{errors.message}</span>
          <span className="text-ink-muted">{values.message.length}/1000</span>
        </span>
      </label>
      <Button type="submit" size="lg" className="group w-full sm:w-auto">
        Send inquiry{" "}
        <Send className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </form>
  );
}
