import Button from "./Button"
import styles from "../style"

const CTA = () => (
    <section className='md:p-16 p-6 my-20 rounded-[10px] flex md:flex-row flex-col items-center justify-between bg-black-gradient-2 box-shadow'>
      <div className="sm:mb-0 mb-5">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <Button text="Get Started" />
    </section>
  )
export default CTA