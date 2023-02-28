import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { PrimaryButton } from '../Button/Primary'

enum STATE {
  UNSUBMITTED,
  SUBMITTING,
  SUBMITTED,
}

type FormValues = {
  email: string
}

const buttonText: Record<STATE, string> = {
  [STATE.UNSUBMITTED]: 'Subscribe',
  [STATE.SUBMITTING]: 'Subscribing...',
  [STATE.SUBMITTED]: 'Subscribed',
}

const Subscribe = () => {
  const [state, setState] = useState(STATE.UNSUBMITTED)
  const [error, setError] = useState<string | null>(null)

  const onSubmitForm = ({ email }: { email: string }) => {
    setState(STATE.SUBMITTING)
    setError(null)

    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then((_res) => {
        setState(STATE.SUBMITTED)
      })
      .catch((_res) => {
        setState(STATE.UNSUBMITTED)
        setError('Something went wrong. Please try again.')
      })
  }

  const { register, handleSubmit } = useForm<FormValues>({
    shouldUseNativeValidation: true,
  })

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col md:flex-row gap-4 items-center relative"
      >
        <input
          id="email-input"
          type="email"
          placeholder="Stay Updated"
          className="mt-1
        block
        w-full
        rounded-md
        shadow-sm
        bg-slate-100
        border-transparent
        border-2
        focus:border-2
        focus:border-blue-400 focus:bg-white focus:ring-0"
          {...register('email', { required: true, maxLength: 320 })}
        />
        <PrimaryButton
          type="submit"
          disabled={state !== STATE.UNSUBMITTED}
          className="w-full md:w-32"
        >
          {buttonText[state]}
        </PrimaryButton>
        {!error && (
          <p className="text-red-600 text-base font-medium tracking-wide text-center absolute -bottom-8 left-0">
            {error}
          </p>
        )}
      </form>
    </>
  )
}

export default Subscribe
