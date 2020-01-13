import formExperience from 'mock/formExperience'
import { pipe, prop, map, flatten, find, propEq } from 'ramda'

const dictionary = {
  unrepresentative: 'Item não representativo',
  'far-representative':
    'Item necessita de grande revisão para ser representativo',
  'almost-representative':
    'Item necessita de pequena revisão para ser representativo',
  representative: 'Item representativo',
}

const getField = model =>
  pipe(
    prop('steps'),
    map(prop('fields')),
    flatten,
    find(propEq('name', model))
  )(formExperience)

const createEmailBody = payload => {
  const emailBody = Object.keys(payload).reduce((prev, currentKey) => {
    const { label, options } = getField(currentKey)
    const isRadioField = !!options
    const softLabel = isRadioField ? label[1] : label
    const value = payload[currentKey]
    const softValue = isRadioField ? dictionary[value] : value

    return prev + `<b>${softLabel}:</b> ${softValue}<br />`
  }, '')

  return emailBody
}

export default createEmailBody
