import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pentesting - CTFs',
    Svg: require('@site/static/img/pentesting.svg').default,
    description: (
      <>
        I'll be posting about how to Solve <b>Hacking Challenges</b> and <b>Machines</b> from
        platforms like Hack The Box, Vulnhub, Try Hack Me etc.
      </>
    ),
  },
  {
    title: 'Competitive Programming',
    Svg: require('@site/static/img/problem_solving.svg').default,
    description: (
      <>
        I'll be also posting about how to Solve <b>Competitive Programming Challenges</b> from
        platforms like Leetcode, Codeforces, Hacker Rank etc.
      </>
    ),
  },
  {
    title: 'IoT Development',
    Svg: require('@site/static/img/iot_development.svg').default,
    description: (
      <>
        And last but not least, later on I'll be also posting blog articles of <b>IOT Tutorials</b>
        and some <b>Best practices</b>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
