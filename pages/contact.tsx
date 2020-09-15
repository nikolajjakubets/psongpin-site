/* eslint-disable react/jsx-curly-brace-presence */
import cx from 'clsx'

import { ContactList, ContactForm } from 'components/contact'
import PageWrapper from 'components/PageWrapper'

const Contact: React.FC = () => {
  return (
    <PageWrapper className="flex items-center h-full py-16">
      <div className="container relative grid lg:grid-cols-12">
        <div
          className={cx(
            'lg:col-span-6',
            'bg-gray-100',
            'px-4 md:px-8 py-16',
            'rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg',
            'text-gray-600'
          )}
        >
          <h1 className="text-4xl font-bold mb-4">{`Let's have a chat!`}</h1>

          <p className="font-bold mb-6">
            Get in touch with me through these contacts:
          </p>

          <ContactList />

          <p className="mb-4">Feel free to send me a message.</p>

          <p className="mb-8">Looking forward to speaking with you!</p>

          <p>
            <strong>Paul Simon Ongpin</strong> - Front-end Developer
          </p>
        </div>
        <div
          className={cx(
            'lg:col-span-6',
            'bg-white',
            'px-4 md:px-8 py-16',
            'rounded-br-lg rounded-bl-lg lg:rounded-bl-none lg:rounded-tr-lg',
            'text-gray-600'
          )}
        >
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Contact
