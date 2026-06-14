"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "This preview form is not connected yet. Please email us or send a WhatsApp message using the details alongside.",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-olive/10 bg-white p-7 shadow-warm sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-olive">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-olive/15 bg-cream px-4 py-3.5 font-normal outline-none transition focus:border-honey focus:ring-2 focus:ring-honey/20"
          />
        </label>
        <label className="text-sm font-semibold text-olive">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-olive/15 bg-cream px-4 py-3.5 font-normal outline-none transition focus:border-honey focus:ring-2 focus:ring-honey/20"
          />
        </label>
      </div>
      <label className="mt-6 block text-sm font-semibold text-olive">
        What can we help with?
        <select
          name="subject"
          className="mt-2 w-full rounded-xl border border-olive/15 bg-cream px-4 py-3.5 font-normal outline-none transition focus:border-honey focus:ring-2 focus:ring-honey/20"
        >
          <option>General question</option>
          <option>Bulk order</option>
          <option>Local collection or delivery</option>
          <option>Help with an order</option>
        </select>
      </label>
      <label className="mt-6 block text-sm font-semibold text-olive">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full resize-y rounded-xl border border-olive/15 bg-cream px-4 py-3.5 font-normal outline-none transition focus:border-honey focus:ring-2 focus:ring-honey/20"
        />
      </label>
      <button type="submit" className="button-primary mt-6 w-full sm:w-auto">Send message</button>
      <p className="mt-4 text-xs leading-5 text-sage">
        Preview only: this form does not send messages yet.
      </p>
      {notice && <p className="mt-4 rounded-xl bg-parchment p-4 text-sm leading-6 text-olive" role="status">{notice}</p>}
    </form>
  );
}
