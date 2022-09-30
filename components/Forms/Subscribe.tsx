import { FormEvent, useState } from 'react'

import { PrimaryButton } from '../Button/Primary'
// import { axiosClient } from 'lib/clients/axios'

enum STATE {
  UNSUBMITTED,
  SUBMITTING,
  SUBMITTED,
}

const buttonText: Record<STATE, string> = {
  [STATE.UNSUBMITTED]: 'Subscribe',
  [STATE.SUBMITTING]: 'Subscribing...',
  [STATE.SUBMITTED]: 'Subscribed',
}

const Subscribe = () => {
  const [state, setState] = useState(STATE.UNSUBMITTED)
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setState(STATE.SUBMITTING)
    // axiosClient
    //   .post(`/api/v1/subscriptions`, { email: email })
    //   .then((_res) => {
    //     setState(STATE.SUBMITTED)
    //   })
    //   .catch((_res) => {
    //     setState(STATE.UNSUBMITTED)
    //   })
  }

  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col md:flex-row gap-4 items-center"
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
      />
        <PrimaryButton
          type="submit"
          disabled={state !== STATE.UNSUBMITTED}
          className="w-full md:w-32"
        >
          {buttonText[state]}
        </PrimaryButton>
    </form>
  )
}

export default Subscribe
