import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Bookshelf.module.css';
import ImageMapper from 'react-img-mapper';
import Modal from 'components/Modal/Modal';
import { booksInterior } from 'data/booksData';

const Bookshelf = ({ imgUrl, areasData = [] }) => {
  // const [areas, setAreas] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAreaClick = (area) => {
    setSelectedBook(area);
    setShowModal(true);
  };

  // useEffect(() => {
  //   if (areasData && areasData.length) {
  //     setAreas(areasData);
  //   }
  // }, [areasData]);

  // if (!areas) {
  //   return <div>...Loading</div>
  // }

  return(
    <div className={styles.Bookshelf}>
      <ImageMapper responsive parentWidth="450" src={imgUrl} map={{name: 'Books123', areas: areasData }} onClick={handleAreaClick}/>
      <Modal className={styles.bookInterior} isOpen={showModal} onClose={() => setShowModal(false)}>
        {selectedBook && booksInterior[selectedBook.title]}
      </Modal>
    </div>
  )
};

Bookshelf.propTypes = {};

Bookshelf.defaultProps = {};

export default Bookshelf;
