import { notFound } from 'next/navigation';
import React from 'react';

//TODO: Look up the lesson on tsx prop implementation

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();

  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
