import { useState, useRef } from 'react';
import styles from './styles.module.css';
import Head from 'next/head';
import DefaultLayout from '@/components/layout/Default';
import { classes } from '@/utils/common';
import projectCategoriesData from '@/data/projectCategories';

export default function StartFirstProject() {
  const [projectCategories, setProjectCategories] = useState(
    projectCategoriesData.map((c) => ({ ...c, checked: false }))
  );

  const projectNameRef = useRef();
  const projecUrlRef = useRef();

  const handleProjectCategoryClick = (event) => {
    const clickedCategory = event.target.innerText;

    setProjectCategories((oldState) => {
      return oldState.map((category) => {
        if (category.name === clickedCategory) {
          return {
            ...category,
            checked: !category.checked,
          };
        } else {
          return { ...category };
        }
      });
    });
  };

  const startProjectFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      projectCategories: projectCategories,
      projectName: projectNameRef.current.value,
      projectUrl: projecUrlRef.current.value,
    };
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Start First Project</title>
        <meta name="description" content="Start First Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <div className={styles.container}>
          <h5 className={styles.blue}>
            To Create Quest you need firstly create Project
          </h5>
          <h3 className={styles.h3}>Add New Project</h3>

          <form onSubmit={startProjectFormSubmit}>
            <div className="row">
              <div className="col-sm-12 col-mid-8 col-lg-6">
                <div className="mb-3">
                  <label
                    htmlFor="startProjectPage-projectNameInput"
                    className="form-label"
                  >
                    Project Name (It can be changed later)
                  </label>
                  <input
                    ref={projectNameRef}
                    type="text"
                    className={classes(styles.input, 'form-control')}
                    id="startProjectPage-projectNameInput"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="startProjectPage-projectUrlInput"
                    className="form-label"
                  >
                    Project URL (It cannot be changed after creation)
                  </label>
                  <input
                    ref={projecUrlRef}
                    type="text"
                    className={classes(styles.input, 'form-control')}
                    id="startProjectPage-projectUrlInput"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Project Category (It cannot be changed after creation)
                  </label>
                  <div>
                    {projectCategories.map((category) => {
                      return (
                        <span
                          onClick={handleProjectCategoryClick}
                          key={category.id}
                          className={classes(
                            'badge',
                            'rounded-pill',
                            category.checked ? 'bg-primary' : 'bg-secondary',
                            styles.projectCategoryBadge
                          )}
                        >
                          {category.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="d-grid gap-2 col-6">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Add Project
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
