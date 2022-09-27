import { FormEvent, useState } from 'react'

import { PrimaryButton } from '../Button/Primary'
// import { axiosClient } from 'lib/clients/axios'

enum STATE {
  UNSUBMITTED,
  SUBMITTING,
  SUBMITTED,
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
      className=" md:flex md:bg-white md:items-center md:rounded-xl md:shadow"
    >
      <input
        id="email-input"
        type="email"
        placeholder="Stay Updated"
        className="py-6 px-8 md:py-2 md:px-0 bg-white w-full md:w-auto text-gray-900 md:bg-transparent text-xl mr-2 flex-shrink flex-grow rounded-xl md:rounded shadow md:shadow-none"
      />
      <div className="hidden  md:block md:text-center mt-4 md:mt-0">
        {state == STATE.UNSUBMITTED && (
          <PrimaryButton type="submit">Subscribe</PrimaryButton>
        )}
        {state == STATE.SUBMITTING && (
          <PrimaryButton type="submit" disabled>
            Requesting...
          </PrimaryButton>
        )}
        {state == STATE.SUBMITTED && (
          <PrimaryButton type="submit" disabled>
            You&apos;re All Set!
          </PrimaryButton>
        )}
      </div>

      <div className="md:hidden mt-4">
        {state == STATE.UNSUBMITTED && (
          <PrimaryButton type="submit">Join The Waitlist</PrimaryButton>
        )}
        {state == STATE.SUBMITTING && (
          <PrimaryButton type="submit" disabled>
            Requesting...
          </PrimaryButton>
        )}
        {state == STATE.SUBMITTED && (
          <PrimaryButton type="submit" disabled>
            You&apos;re All Set!
          </PrimaryButton>
        )}
      </div>
    </form>
  )
}

export default Subscribe
