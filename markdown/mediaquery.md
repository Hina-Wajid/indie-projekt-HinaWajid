/* Mobile First — default styles */

/* Tablet */
@media (min-width: 768px) {
  /* tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* desktop styles */
}




------------------------------------------------------------------------------------
/* Desktop first (default) */
body {
  font-size: 18px;
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 768px) {
  body {
    font-size: 17px;
  }
}
/* Mobile */
@media (max-width: 767px) {
  body {
    font-size: 16px;
  }
}

-----------example--------------------------

/* =========== DESKTOP FIRST =========== */
/* Desktop styles (default) */
h1 { font-size: 40px; }
h2 { font-size: 32px; }
p  { font-size: 18px; }

/* =========== TABLET =========== */
@media (max-width: 1024px) and (min-width: 768px) {
  h1 { font-size: 35px; }
  h2 { font-size: 28px; }
  p  { font-size: 17px; }
}

/* =========== MOBILE =========== */
@media (max-width: 767px) {
  h1 { font-size: 30px; }
  h2 { font-size: 26px; }
  p  { font-size: 16px; }
}
