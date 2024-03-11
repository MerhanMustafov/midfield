import { BACKEND_BASE_URL } from '@/constants/endpoints.constants';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }: { params: { date: string } }) => {
  const { date } = params;
  console.log(date);

  try {
    const res = await fetch(BACKEND_BASE_URL + `/api/fixtures/${date}`);
    const resData = await res.json();

    return NextResponse.json(resData, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: 'Error has occurred !' }, { status: 500 });
  }
};