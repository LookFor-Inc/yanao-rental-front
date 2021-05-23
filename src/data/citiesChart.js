const labels = ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май']

export const citiesChartData = {
  labels: labels,
  datasets: [
    {
      label: 'Салехард',
      data: [123, 50, 357, 578, 789, 1357],
      fill: false,
      backgroundColor: '#FF6C1A',
      borderColor: '#E56117'
    },
    {
      label: 'Ноябрьск',
      data: [245, 300, 129, 628, 945, 600],
      fill: false,
      backgroundColor: '#059669',
      borderColor: '#047857'
    },
    {
      label: 'Новый Уренгой',
      data: [321, 129, 357, 890, 1307, 1500],
      fill: false,
      backgroundColor: '#ea0c00',
      borderColor: '#b91c1c'
    }
  ]
}
