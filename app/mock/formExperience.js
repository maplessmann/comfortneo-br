import * as yup from 'yup'
import Field from 'components/Form/Fields/Field'
import Email from 'components/Form/Fields/Email'
import RadioGroup from 'components/Form/Fields/RadioGroup'
import TextArea from 'components/Form/Fields/TextArea'

const options = [
  {
    label: 'Item não representativo',
    value: 'unrepresentative',
  },
  {
    label: 'Item necessita de grande revisão para ser representativo',
    value: 'far-representative',
  },
  {
    label: 'Item necessita de pequena revisão para ser representativo',
    value: 'almost-representative',
  },
  {
    label: 'Item representativo',
    value: 'representative',
  },
]

const createRadioConfig = ({ model, translation }) => ({
  name: model,
  label: translation,
  component: RadioGroup,
  initialValue: '',
  validator: yup.string().required('Preenchimento obrigatório'),
  options,
})

export default {
  steps: [
    {
      header: {
        title: 'Identificação',
      },
      fields: [
        {
          name: 'name',
          label: 'Nome completo',
          component: Field,
          initialValue: '',
          validator: yup.string().required('Campo obrigatório'),
        },
        {
          name: 'email',
          label: 'Email',
          component: Email,
          initialValue: '',
          validator: yup
            .string()
            .email('Email inválido')
            .required('Campo obrigatório'),
        },
      ],
    },
    {
      header: {
        title: 'Seção do Cabeçalho',
      },
      fields: [
        createRadioConfig({
          model: 'header_scale_name',
          translation: [
            'Comfort assessment Neo Scale',
            'Avaliação de conforto neonatal',
          ],
        }),
        createRadioConfig({
          model: 'header_date',
          translation: ['Date/time', 'Data/horário'],
        }),
        createRadioConfig({
          model: 'header_sticker_patient',
          translation: [
            'Sticker with patient’s name',
            'Etiqueta com nome do paciente',
          ],
        }),
        createRadioConfig({
          model: 'header_mark',
          translation: ['Place a mark', 'Coloque uma marca'],
        }),
        {
          name: 'header_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Primeiro indicador',
      },
      fields: [
        createRadioConfig({
          model: 'alertness_title',
          translation: ['Alertness', 'Alerta'],
        }),
        createRadioConfig({
          model: 'alertness_first_variable',
          translation: [
            '1. quiet sleep (eyes closed, no facial movement)',
            '1. sono tranquilo (olhos fechados, sem movimentos faciais)',
          ],
        }),
        createRadioConfig({
          model: 'alertness_second_variable',
          translation: [
            '2. active sleep (eyes closed, facial movement)',
            '2. sono ativo (olhos fechados, com movimentos faciais)',
          ],
        }),
        createRadioConfig({
          model: 'alertness_third_variable',
          translation: [
            '3. quietly awake (eyes open, no facial movement)',
            '3. acordado em silêncio (olhos abertos, sem movimentos faciais)',
          ],
        }),
        createRadioConfig({
          model: 'alertness_fourth_variable',
          translation: [
            '4. actively awake (eyes open, facial movement)',
            '4. acordado ativamente (olhos abertos, com movimentos faciais)',
          ],
        }),
        createRadioConfig({
          model: 'alertness_fifth_variable',
          translation: ['5. awake and hyperalert', '5. acordado e hiperativo'],
        }),
        {
          name: 'alertness_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Segundo indicador',
      },
      fields: [
        createRadioConfig({
          model: 'calmness_title',
          translation: ['Calmness/Agitation', 'Calma/Agitação'],
        }),
        createRadioConfig({
          model: 'calmness_first_variable',
          translation: [
            '1. calm (appears lucid and serene)',
            '1. calmo (aparentemente lúcido e sereno)',
          ],
        }),
        createRadioConfig({
          model: 'calmness_second_variable',
          translation: [
            '2. slightly anxious (shows slight anxiety)',
            '2. levemente ansioso (demonstra ansiedade leve)',
          ],
        }),
        createRadioConfig({
          model: 'calmness_third_variable',
          translation: [
            '3. anxious (appears agitated but remains in control)',
            '3. ansioso (demonstra ansiedade, mas sob controle)',
          ],
        }),
        createRadioConfig({
          model: 'calmness_fourth_variable',
          translation: [
            '4. very anxious (appears very agitated, just able to control)',
            '4. muito ansioso (demonstra muita agitação, mas é capaz de se controlar)',
          ],
        }),
        createRadioConfig({
          model: 'calmness_fifth_variable',
          translation: [
            '5. panicky (severe distress with loss of control)',
            '5. em pânico (demonstra desespero incontrolável)',
          ],
        }),
        {
          name: 'calmness_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Terceiro indicador',
      },
      fields: [
        createRadioConfig({
          model: 'respiratory_title',
          translation: [
            'Respiratory response (only in mechanically ventilated children)',
            'Resposta respiratória (apenas em crianças sob ventilação mecânica)',
          ],
        }),
        createRadioConfig({
          model: 'respiratory_first_variable',
          translation: [
            '1. no spontaneous respiration',
            '1. sem respiração espontânea',
          ],
        }),
        createRadioConfig({
          model: 'respiratory_second_variable',
          translation: [
            '2. spontaneous respiration on ventilator',
            '2. respiração espontânea no ventilador',
          ],
        }),
        createRadioConfig({
          model: 'respiratory_third_variable',
          translation: [
            '3. unrest or resistance to ventilator',
            '3. inquietação ou resistência ao ventilador',
          ],
        }),
        createRadioConfig({
          model: 'respiratory_fourth_variable',
          translation: [
            '4. actively breathes against ventilator or coughs regularly',
            '4. respira contra o ventilador ou tosse frequentemente',
          ],
        }),
        createRadioConfig({
          model: 'respiratory_fifth_variable',
          translation: ['5. fights ventilator', '5. briga com o ventilador'],
        }),
        {
          name: 'respiratory_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Quarto indicador',
      },
      fields: [
        createRadioConfig({
          model: 'crying_title',
          translation: [
            'Crying (only in spontaneously breathing children)',
            'Choro (apenas em crianças com respiração espontânea)',
          ],
        }),
        createRadioConfig({
          model: 'crying_first_variable',
          translation: ['1. no crying', '1. sem choro '],
        }),
        createRadioConfig({
          model: 'crying_second_variable',
          translation: ['2. faint crying', '2. choro fraco'],
        }),
        createRadioConfig({
          model: 'crying_third_variable',
          translation: [
            '3. soft crying or moaning',
            '3. choro suave ou gemido',
          ],
        }),
        createRadioConfig({
          model: 'crying_fourth_variable',
          translation: ['4. hard crying', '4. choro forte'],
        }),
        createRadioConfig({
          model: 'crying_fifth_variable',
          translation: [
            '5. intense crying or screaming',
            '5. choro intenso ou gritos',
          ],
        }),
        {
          name: 'crying_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Quinto indicador',
      },
      fields: [
        createRadioConfig({
          model: 'body_title',
          translation: ['Body movement', 'Movimento corporal'],
        }),
        createRadioConfig({
          model: 'body_first_variable',
          translation: [
            '1. no or minimal movement',
            '1. nenhum ou movimento mínimo',
          ],
        }),
        createRadioConfig({
          model: 'body_second_variable',
          translation: [
            '2. up to three slight arm and/or leg movements',
            '2. até três movimentos suaves dos braços e/ou pernas',
          ],
        }),
        createRadioConfig({
          model: 'body_third_variable',
          translation: [
            '3. more than three slight arm and/or leg movements',
            '3. mais de três movimentos suaves dos braços e/ou pernas',
          ],
        }),
        createRadioConfig({
          model: 'body_fourth_variable',
          translation: [
            '4. up to three vigorou arm and/or leg movements',
            '4. até três movimentos vigorosos dos braços e/ou pernas',
          ],
        }),
        createRadioConfig({
          model: 'body_fifth_variable',
          translation: [
            '5. more than three vigorou arm and/or leg movements, or whole body',
            '5. mais de três movimentos vigorosos dos braços e/ou pernas, ou corpo inteiro',
          ],
        }),
        {
          name: 'body_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Sexto indicador',
      },
      fields: [
        createRadioConfig({
          model: 'facial',
          translation: ['Facial tension', 'Tensão facial'],
        }),
        createRadioConfig({
          model: 'facial_first_variable',
          translation: [
            '1. facial muscles fully relaxed, relaxed open mouth',
            '1. músculos faciais totalmente relaxados, boca aberta relaxada',
          ],
        }),
        createRadioConfig({
          model: 'facial_second_variable',
          translation: ['2. normal facial tension', '2. tensão facial normal'],
        }),
        createRadioConfig({
          model: 'facial_third_variable',
          translation: [
            '3. intermitente eye squeeze and brow furrow',
            '3. aperto intermitente dos olhos e sulco das sobrancelhas',
          ],
        }),
        createRadioConfig({
          model: 'facial_fourth_variable',
          translation: [
            '4. continuous eye squeeze and brow furrow',
            '4. aperto contínuo dos olhos e sulco das sobrancelhas',
          ],
        }),
        createRadioConfig({
          model: 'facial_fifth_variable',
          translation: [
            '5. facial muscles contorted and grimacing (eye squeeze, brow furrow, open mouth, nasal-labial lines)',
            '5. músculos faciais contorcidos e caretas (aperto dos olhos, sulco da testa, boca aberta, linhas labiais e nasais)',
          ],
        }),
        {
          name: 'facial_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Sétimo indicador',
      },
      fields: [
        createRadioConfig({
          model: 'body_tone',
          translation: [
            '(Body) muscle tone (observation only) ',
            '(Corpo) tônus muscular (apenas observação)',
          ],
        }),
        createRadioConfig({
          model: 'body_tone_first_variable',
          translation: [
            '1. muscles fully relaxed (open hands, dribbling, open mouth)',
            '1. músculos totalmente relaxados (mãos abertas, boca aberta)',
          ],
        }),
        createRadioConfig({
          model: 'body_tone_second_variable',
          translation: [
            '2. reduced muscle tone; less resistance than normal',
            '2. tônus muscular diminuído; menor resistência que o normal',
          ],
        }),
        createRadioConfig({
          model: 'body_tone_third_variable',
          translation: ['3. normal muscle tone ', '3. tônus muscular normal'],
        }),
        createRadioConfig({
          model: 'body_tone_fourth_variable',
          translation: [
            '4. increased muscle tone (clenched hands and/or clenched, bent toes)',
            '4. aumento do tônus muscular (mãos cerradas e/ou dedos dobrados e cerrados)',
          ],
        }),
        createRadioConfig({
          model: 'body_tone_fifth_variable',
          translation: [
            '5. extreme muscle tone (rigidity and flexion of fingers and/or toes)',
            '5. tônus muscular extremo (rigidez e flexão dos dedos das mãos e pés)',
          ],
        }),
        {
          name: 'body_tone_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Seção de pontuação',
      },
      fields: [
        createRadioConfig({
          model: 'total_score',
          translation: ['Total score', 'Pontuação total'],
        }),
        createRadioConfig({
          model: 'nrs_pain',
          translation: ['NRS pain*', 'NRS dor'],
        }),
        createRadioConfig({
          model: 'nrs_pain_description',
          translation: [
            '1. estimate of pain (0 = no pain to 10 = worst possible pain)',
            '1. estimativa de dor (0= sem dor a 10= pior dor possível)',
          ],
        }),
        createRadioConfig({
          model: 'nrs_distress',
          translation: ['NRS distress*', 'NRS sofrimento'],
        }),
        createRadioConfig({
          model: 'nrs_distress_description',
          translation: [
            '1. estimate of distress (0 = no distress to 10 = worst possible distress)',
            '1. estimativa de sofrimento (0= sem sofrimento a 10= pior sofrimento possível)',
          ],
        }),
        {
          name: 'total_score_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
    {
      header: {
        title: 'Seção do rodapé',
      },
      fields: [
        createRadioConfig({
          model: 'footer_item_1',
          translation: [
            'Details sedatives/analgesics',
            'Detalhes de sedativos/analgésicos',
          ],
        }),
        createRadioConfig({
          model: 'footer_item_2',
          translation: ['Reason assessment', 'Avaliação da razão'],
        }),
        createRadioConfig({
          model: 'footer_description',
          translation: [
            '(Before or after medication or standard assessment) *Abbreviation: NRS = Numeric Rating Scale',
            '(antes ou depois da medicação ou da avaliação padrão) *Abreviação NRS: escala numérica de avaliação',
          ],
        }),
        {
          name: 'footer_obs',
          label: 'Observações',
          component: TextArea,
          initialValue: '',
          validator: null,
        },
      ],
    },
  ],
}
