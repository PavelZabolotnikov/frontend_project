import assert from 'assert';
import Lawyer from './types/Lawyer';
import LawyerAdd from './types/LawyerAdd';
import LawyerChange from './types/LawyerChange';

// export async function loadLawyers(): Promise<Event[]> {
//   const res = await fetch('/api/lawyers');
//   return res.json();
// }

// export const loadOneEvent = async (id: number): Promise<Lawyer> => {
//   const res = await fetch(`/api/lawyers/${id}`);
//   return res.json();
// };

export async function removeLawyers(id: number): Promise<void> {
  const res = await fetch(`/api/lawyers/${id}`, { method: 'DELETE' });
  return res.json();
}

export async function createLawyers(oneLawyer: LawyerAdd): Promise<Lawyer> {
  const formData = new FormData();
  formData.append('photo', oneLawyer.photo);
  formData.append('description', oneLawyer.description);
  formData.append('email', oneLawyer.email);
  formData.append('experience', String(oneLawyer.experience));
  formData.append('fullName', oneLawyer.full_name);
  formData.append('phone', oneLawyer.phone);
  formData.append('price', String(oneLawyer.price));
  formData.append('speciality', oneLawyer.speciality);

  const res = await fetch('/api/lawyers', {
    method: 'POST',
    body: formData,
  });

  return res.json();
}

export async function updateLawyers(changeLawyer: LawyerChange): Promise<void> {
  assert(changeLawyer.id);
  const res = await fetch(`/api/lawyers/${changeLawyer.id}/update-cards`, {
    method: 'PUT',
    body: JSON.stringify({ changeLawyer }),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
}
