# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
movies = Movie.create([
  {
    name: "Clerks",
    image_url:"https://www.themoviedb.org/t/p/w1280/zeFhNF0SXlYIvWXpaOLuXVQ3jB4.jpg"
  },
  {
    name: "Mallrats",
    image_url:"https://www.themoviedb.org/t/p/w1280/kNm0AQFIc4nlzCd8Nqvbb5gccAV.jpg"
  },
  {
    name: "Chasing Amy",
    image_url:"https://www.themoviedb.org/t/p/w1280/tqydORBcNlQxy3ijgSpPurgDHM2.jpg"
  },
  {
    name: "Dogma",
    image_url:"https://www.themoviedb.org/t/p/w1280/xI5beD8Td79E2uZNAxgd1gWWOEd.jpg"
  },
  {
    name: "Jay and Silent Bob Strike Back",
    image_url:"https://www.themoviedb.org/t/p/w1280/aEsAdMAhwKYFgnHHxMOknktQYKK.jpg"
  },
  {
    name: "Clerks II",
    image_url:"https://www.themoviedb.org/t/p/w1280/cLSW0nW94XT0DmBS69ublcLfQ9c.jpg"
  },
  {
    name: "Jay and Silent Bob Reboot",
    image_url:"https://www.themoviedb.org/t/p/w1280/3hLTjzInrHgbcaedjnWNEPOinDi.jpg"
  }
])

reviews = Review.create([
  {
    title:"Great Movie",
    description:"This movie is one of the best!",
    score:"5",
    movie: movies.first
  },
  {
    title:"Bad Movie",
    description:"This movie totally sucks",
    score:"1",
    movie: movies.first
  }
])