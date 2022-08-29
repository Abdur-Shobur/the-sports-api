// country api
const showCountys = () => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/all_countries.php
`
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountry(data.countries))
}

// display country
const showCountry = (data) => {
  const showCountry = document.querySelector('.showCountry')
  data.forEach((element) => {
    let count = 1
    const { name_en } = element
    const div = document.createElement('div')
    div.innerHTML = `
    <h5 onClick='showDetails("${name_en}")'>${name_en}</h5>
    `
    showCountry.appendChild(div)
  })
}

const displaynewTeams = document.querySelector('.newItemapped')
const showTem = document.querySelector('.displayTeam')

// all teams
const showDetails = (data) => {
  showTem.style.display = 'block'
  const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${data}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTeams(data.teams))

  const showCountry = document.querySelector('.showCountry')
  showCountry.style.opacity = '0.9'
}

// display teams
const displayTeams = (data) => {
  displaynewTeams.innerHTML = ` `
  data.forEach((element) => {
    const {
      strTeamBadge,
      strTeam,
      idTeam,
      strCountry,
      strDescriptionEN,
      strStadium,
    } = element
    const div = document.createElement('div')
    displaynewTeams.style.border = '1px solid white'
    displaynewTeams.style.background = '#000000'
    div.classList.add('clab')
    div.innerHTML = `
    <img src="${strTeamBadge}" alt="" />
    <h6>${strTeam ? strTeam : ''}</h6>
    <p>${strDescriptionEN?.slice(0, 100)}...</p>
    <h4>${strStadium}...</h4>
    `
    displaynewTeams.appendChild(div)
  })
}

showCountys()

// remove btn
const toggleList = () => {
  const displayTeam = document.querySelector('.displayTeam')
  displayTeam.style.display = 'none'
  const showCountry = document.querySelector('.showCountry')
  showCountry.style.opacity = '1'
}

const loadCounty = () => {
  const country = document.querySelector('.country-fild')
  const countryFild = country.value

  showTem.style.display = 'block'
  const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${countryFild}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTeams(data.teams))

  const showCountry = document.querySelector('.showCountry')
  showCountry.style.opacity = '0.9'
  country.value = ''
}
