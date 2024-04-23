import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ditch the credit card confusion! Our simple guide uncovers hidden fees,
        unlocks secret perks, and lands you the perfect plastic companion in
        just a few easy clicks. Upgrade your wallet without the financial
        headache - find your dream card faster than ever!
      </p>

      <Button styles="mt-10" content="Apply now" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
