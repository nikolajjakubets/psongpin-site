import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import cx from 'clsx'

const Footer: React.FC = () => {
  const router = useRouter()
  return (
    <footer
      className={cx({
        'absolute bottom-0 left-0 right-0': router.pathname === '/',
      })}
    >
      <div className="container text-center text-white py-4">
        <motion.p
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {`Made by `}
          <span className="font-bold">Paul Simon Ongpin</span>
          {` using `}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            Next.js
          </a>
          {` and `}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            React
          </a>
          .
        </motion.p>
      </div>
    </footer>
  )
}
export default Footer