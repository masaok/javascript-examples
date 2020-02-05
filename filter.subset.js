#!/usr/bin/env node

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
const source2 = { d: 4, e: 5 }

// The list of items the user has already chosen
const existing = [
  {
    name: 'A'
  },
  {
    name: 'B'
  }
]

// The list of items the user can choose from
const selection = [
  {
    name: 'A'
  },
  {
    name: 'B'
  },
  {
    name: 'C'
  },
  {
    name: 'D'
  }
]

console.log('EXISTING:')
console.log(existing)

console.log('SELECTION:')
console.log(selection)

console.log('')
console.log('BASIC FILTER AND INCLUDES FAILS...')
const filtered = selection.filter(item => {
  return !existing.includes(item)
})
console.log(filtered) // fails; prints entire selection list

// Hash style
console.log('')
console.log('HASH STYLE FILTERING...')
const existing_hash = {}
existing.forEach(item => {
  existing_hash[item.name] = item
})
console.log('EXISTING HASH:')
console.log(existing_hash)

const hash_matches = []
for (let i = 0; i < selection.length; i++) {
  if (selection[i].name in existing_hash) {
    console.log('MATCH: ' + selection[i].name)
  } else {
    hash_matches.push(selection[i].name)
  }
}
console.log('HASH MATCHES:')
console.log(hash_matches)

const hash_filtered_result = selection.filter(item =>
  hash_matches.includes(item.name)
)
console.log(hash_filtered_result)

// Separate array of ids style
console.log('')
console.log('ARRAY STYLE FILTERING...')
const existing_names = existing.map(item => {
  return item.name
})
console.log(existing_names)

const selection_names = selection.map(item => {
  return item.name
})
console.log(selection_names)

const array_filtered = selection_names.filter(item => {
  return !existing_names.includes(item)
})
console.log(array_filtered)

const array_filtered_result = selection.filter(item =>
  array_filtered.includes(item.name)
)
console.log(array_filtered_result)

// At this point, re-create the new filtered selection list

// https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e

console.log('')
console.log('DOUBLE LOOP FILTERING...')
let loop_result = []
let loop_matches = []
for (let i = 0; i < selection.length; i++) {
  for (let j = 0; j < existing.length; j++) {
    if (selection[i].name === existing[j].name) {
      console.log('MATCH: ' + selection[i].name)
      loop_matches.push(selection[i].name)
    }
  }
}
console.log('LOOP MATCHES:')
console.log(loop_matches)

const loop_filtered_result = selection.filter(
  item => !loop_matches.includes(item.name)
)
console.log(loop_filtered_result)

// Set style (Toal)
console.log('')
console.log('SET STYLE FILTERING...')
const e = new Set(existing.map(o => o.name))
console.log(e)
const set_filtered = selection.filter(o => !e.has(o.name))
console.log(set_filtered)
