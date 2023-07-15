import { NextResponse } from 'next/server'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  // resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'enzo.sak@hotmail.com',
  //   subject: 'Nova mensagem de formulário',
  //   html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Mensagem: ${message}</p>`
  // })

  // return NextResponse.json({ message: 'Email sent' })

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: 'Formulário <onboarding@resend.dev>',
      to: ['enzo.sak@hotmail.com'],
      subject: 'Nova mensagem de formulário',
      html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Mensagem: ${message}</p>`
    })
  })

  if (res.ok) {
    const data = await res.json()
    return NextResponse.json(data)
  } else {
    throw new Error('Error sending email!')
  }
}
