import { URL_LOGIN } from '@/constants/endpoints.constants';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const values = await request.json();

  try {
    const res = await fetch(URL_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (res.status !== 200) {
      const resData = await res.json();
      return NextResponse.json({ error: resData.error }, { status: 500 });
    }
    const resData = await res.json();
    return NextResponse.json(resData, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: 'Unexpected Error has occurred !' }, { status: 500 });
  }
};
