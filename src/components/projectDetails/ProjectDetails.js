import { useState } from 'react';
import Head from 'next/head';
import DefaultLayout from '@/components/layout/Default';
import styles from './styles.module.css';
import { classes } from '@/utils/common';

export default function ProjectDetails() {
  const [radioButtonsName, setRadioButtonsName] = useState('');

  const projectDetailsFormSubmit = (event) => {
    event.priventDefault();
    console.log('submit');

    const clickedContinue = event.target.value;
  };

  const onOptionChange = (event) => {
    setRadioButtonsName(event.target.name);
  };

  return (
    <>
      <Head>
        <title>Project Details</title>
        <meta name="description" content="Project Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <div className={styles.container}>
          <h5 className={styles.blue}>Project Details</h5>
          <h3 className={styles.h3}>What is your main goal with AlphaQuest?</h3>

          <form onSubmit={projectDetailsFormSubmit}>
            <div className="row">
              <div className="col-sm-12 col-mid-8 col-lg-6">
                <div className={classes('form-check', styles.listRadio)}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Grow My Community"
                    id="Grow My Community"
                    checked={radioButtonsName === 'Grow My Community'}
                    onChange={onOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="Grow My Community"
                  >
                    Grow My Community
                  </label>
                </div>
                <div className={classes('form-check', styles.listRadio)}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Activate Existing Members"
                    id="Activate Existing Members"
                    checked={radioButtonsName === 'Activate Existing Members'}
                    onChange={onOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="Activate Existing Members"
                  >
                    Activate Existing Members
                  </label>
                </div>

                <div className={classes('form-check', styles.listRadio)}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Understand My Members"
                    id="Understand My Members"
                    checked={radioButtonsName === 'Understand My Members'}
                    onChange={onOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="Understand My Members"
                  >
                    Understand My Members
                  </label>
                </div>
                <div className={classes('form-check', styles.listRadio)}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Other"
                    id="Other"
                    checked={radioButtonsName === 'Other'}
                    onChange={onOptionChange}
                  />
                  <label className="form-check-label" htmlFor="Other">
                    Other
                  </label>
                </div>
                <div className="d-grid gap-4 col-6 d-md-flex justify-content-md-start">
                  <button type="submit" className="btn btn-dark col-3">
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary col-9">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </DefaultLayout>
    </>
  );
}
