
import styles from '../styles/AutoSlide.module.css'
import Link from 'next/link';
import Sell from './target/Sell';
import Repaire from './target/Repaire';


const Banner = () => {
    return (
      <div  className={styles.banner}>
        <div className={styles.inner}>
          <div className={styles.repaire__box}>
            {/* <Link href="/">Sell</Link> */}
            <Sell options={[
              'option-1',
              'option-2',
              'option-3',
            ]}/>
          </div>
          <div className={styles.repaire__box}>
            {/* <Link href="/">Repaire</Link> */}
            <Repaire options={[
              'option-1',
              'option-2',
              'option-3',
            ]}/> 
          </div>
        </div>
      </div>
    
  )
};

export default Banner