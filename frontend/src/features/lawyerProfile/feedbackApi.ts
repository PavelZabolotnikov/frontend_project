import Feedback from './types/Feedback';

export async function loadFeedback(id: number): Promise<Feedback[]> {
  const res = await fetch(`/api/feedback/${id}`);
  return res.json();
}

export async function loadFeedbackList(): Promise<Feedback[]> {
  const res = await fetch(`/api/feedback`);
  return res.json();
}

export async function removeFeedback(id: number): Promise<void> {
  const res = await fetch(`/api/feedback/${id}`, { method: 'delete' });
  return res.json();
}

export async function checkFeedback(oneFeedback: Feedback): Promise<void> {
  const res = await fetch(`/api/feedback`, {
    method: 'put',
    body: JSON.stringify({ oneFeedback }),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
}

type Props = {
  feedbackName: string;
  inputDate: string;
  inputPhone: string;
  inputEmail: string;
  inputAboutFeedback: string;
  lawyer_id: number;
  stars: number;
};

export async function createFeedback({
  feedbackName,
  inputDate,
  inputPhone,
  inputEmail,
  inputAboutFeedback,
  lawyer_id,
  stars,
}: Props): Promise<Feedback> {
  const res = await fetch('/api/feedback', {
    method: 'POST',
    body: JSON.stringify({
      feedbackName,
      inputDate,
      inputPhone,
      inputEmail,
      inputAboutFeedback,
      id: lawyer_id,
      stars,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
