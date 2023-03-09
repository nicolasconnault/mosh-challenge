import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

import consultationImage from '../public/images/consultation.png'
import therapyImage from '../public/images/therapy.png'
import Card from '../components/Card'
import { GetStaticProps } from "next";

interface HomeProps {
  data: HeroBenefits;
}

interface HeroBenefits {
  [key: string]: [string]
}

export default function Home({ data }: HomeProps ) {
  return (
    <>
      <Head>
        <title>MOSH - Get back on track</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.hero__titleContainer}>
            <div className={styles.hero__titleSubcontainer}>
              <h2 className={styles.hero__titleContainer__title}>
                Get back on track
              </h2>
              <p className={styles.hero__titleContainer__subtitle}>
                Treatment plan in 24 hours.
              </p>
              <p className={styles.hero__titleContainer__subtitle}>
                Treat anxiety, depression &amp; more
              </p>
            </div>
          </div>

          <div className={styles.hero__cardsContainer}>
            <Card
              image={consultationImage}
              title="Free Online Doctor Consultation"
              ctaLabel="get started"
              ctaUrl="https://www.getmosh.com.au/quizzes/mental_health_quiz"
              benefits={data['consultation']}
            />
            <Card
              image={therapyImage}
              title="One-on-one therapy sessions"
              ctaLabel="book therapist"
              ctaUrl="https://www.getmosh.com.au/booking/mental_health"
              benefits={data['therapy']}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch(`https://moshhero.free.beeceptor.com/my/api/options`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
