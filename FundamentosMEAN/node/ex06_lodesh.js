const _ = require('lodash')

const alunos = [{
    nome:'Joao',
    note: 7.6
},{
    nome:'Maria',
    note: 8.6
},{
    nome:'Pedro',
    note: 8.1
}]

const media = _.sumBy(alunos, 'note') / alunos.length
console.log(media)