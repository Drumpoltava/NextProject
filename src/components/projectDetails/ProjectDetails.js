import { useState } from 'react';
import styles from './styles.module.css';
import { classes } from '@/utils/common';
import Head from 'next/head';
import DefaultLayout from '@/components/layout/Default';
import detailsCategoriesData from '@/data/detailsCategories';

export default function ProjectDetails() {
  const [radioButtonsName, setRadioButtonsName] = useState(
    detailsCategoriesData.map((d) => ({ ...d, checked: false }))
  );

  const projectDetailsFormSubmit = (event) => {
    event.priventDefault();

    const startProjectFormData = {
      radioButtonsName: radioButtonsName,
      detailsName: detailsName.target.value,
    };
    console.log(startProjectFormData);
  };

  const onOptionChange = (event) => {
    const clickedDetail = event.target.innerText;

    setRadioButtonsName((oldState) => {
      return oldState.map((detail) => {
        if (detail.name === clickedDetail) {
          return {
            ...detail,
            checked: !detail.checked,
          };
        } else {
          return { ...detail };
        }
      });
    });
  };

  // const handleDetailsCategoriesClick = () => {};

  return (
    <>
      <Head>
        <title>Project Details</title>
        <meta name="description" content="Project Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        'Grow My Community'
      </Head>
      <DefaultLayout>
        <div className={styles.container}>
          <h5 className={styles.blue}>Project Details</h5>
          <h3 className={styles.h3}>What is your main goal with AlphaQuest?</h3>

          <form onSubmit={projectDetailsFormSubmit}>
            <div className="row">
              <div className="col-sm-12 col-mid-8 col-lg-6">
                {/* <div className={classes('form-check', styles.listRadio)}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    value="Grow My Community"
                    id="flexRadioDefault1"
                    checked={radioButtonsName === 'Grow My Community'}
                    onChange={onOptionChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Grow My Community
                  </label>
                </div> */}

                <div>
                  {radioButtonsName.map((detail) => {
                    return (
                      <label
                        className={classes('form-check', styles.listRadio)}
                        key={detail.id}
                      >
                        {detail.name}
                        <input
                          // onClick={handleDetailsCategoriesClick}
                          className="form-check-input"
                          type="radio"
                          // checked={!radioButtonsName}
                          onChange={onOptionChange}
                        />
                      </label>
                    );
                  })}
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
