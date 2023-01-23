var clothesIndex = 0;
var armsIndex = 0;
var expressionIndex = 0;

var clothesImages = ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhW_6JIHOPYeIoQCOQEtockQrFOJxfW8CrOg9taKjSnYEp3K2j96P22bpUXDLC2hqn6hBmLo-BmHsaidsgTZ0ocfmg_IoxN8RP2T-APhsV0ovDKQB4n4bm99BCQp4fZseCYRgEzim7W3q0nCK8kJKBN-9Vz1Qz_b7rVVTejtlvzsEySFFa5XHTSGlDL/s3000/PK%20BRA%201.webp", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-je4jdt9XhqjJJk9QDc9kV8ZxwqshEwLSBsiJubM0S8K0VWYg-rF6gXu-TD7mk5teafZ2WpRWPV-0DOom7RRqMzgwslrpBcjmmnHAQ-cBkNoMeOcFiqj1Egkp7XlQ8ml9Sdnno4752f7BrDCGvSFMehludUGF3Ccisw1usH2NefszuT2AqFwYGj1z/s3000/PK%20BRA%202.webp"];
var armsImages = ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6g4SHtmwQ2-KDFFbQMe-G7ZHZmBmdEcq1gm4z6avTdYVnkaHDkiuBJ13H_eZcT-rKpqA8aCrvBJZZTtzC0LF5_x8oSp1y104iLd4v3L0B6bcTzYA5LmKZq05sIqAd2ocr8YIXDB9l6FJtjH4aQn0AE9GfrMrpKDrdV1Ip1G0hA9wSeX75RN6W7f2x/s3000/PK%20ARMS%201.webp", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhenv2be7DfNenRaNZyp2PXce9_vWulI1B8Qacm76xu83AayOir7tUqPQEuf7it4QnfOp1FhtpRblK6KDxd5JO9L2ZdJ1cGAtTaKVyYLIxlvgWyWYX2dNClsZIL1L1Nt0UVU7sO4_6Hjpc5QF-QIEQBBEO8Rw_5Ty3vupUMfHpGyl7KfQa71droCVlJ/s3000/PK%20ARMS%202.webp", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAT6DqVw5YrcFEAAat4RtPNeAAZF2MwvBJKEiPT6u8JFKx0gL5rcOAhJ80LmzM7NBm7goOjKvNaMusayrZ20912UUKrEvJZGZQI3zBBGXxOjxK_fXOGwPPrKxL5enDAo6NT_jihekPAHhA0tbi7e1smS3qlpm-QgQbrhFuYrdnpiN1JhnS01H9rNwT/s3000/PK%20ARMS%203.webp"];
var expressionImages = ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD3DmvgkAWxaKEpXgkt9XB7sNqdf_pgfmH-Mj3jpdvI2NJHMF0NvEXSiCXpYtFre76hFPCgXhV18zIVmInv5kn5PtZd_T8pBEP_3nvezPnCQKB1E6BkQbR3ZvKVMoCNXSo29VU_eIIB5ZazhZ44ANVhLpOBI25r_Ou0rUgW-4oiU7uN6dsPfXvs85a/s3000/PK%20PANTIES%201.webp", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7gMJdmGI_WlTOGixe0f-_cfOfIRs5KytwM2qKZ4KaV11M8NbmRuSY5ZDDFxVuOKmcyUEAUrN5w2U0yvCSzW0prp_E8nC5KhrsQMXTKihv6WKA4k5i1SI0KaJE4_vbfNNOASiZmMa5Ti6l2mizIxiE1fTNIzYRet4w5wdobRMKL-2Mqoed6j-11qBk/s3000/PK%20PANTIES%202.webp"];

function changeClothes() {
  document.getElementById("clothes").src = clothesImages[clothesIndex];
  clothesIndex = (clothesIndex + 1) % clothesImages.length;
}

function changeArms() {
  document.getElementById("arms").src = armsImages[armsIndex];
  armsIndex = (armsIndex + 1) % armsImages.length;
}

function changeExpression() {
  document.getElementById("expression").src = expressionImages[expressionIndex];
  expressionIndex = (expressionIndex + 1) % expressionImages.length;
}
