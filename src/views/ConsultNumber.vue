<template>
  <div class="mainPrincipal">
    <div class="topbar"></div>
    <h1 class="text text-center">Consulta</h1>

   <b-table
      :items="items"
      :fields="fields"
      >
      <template v-slot:cell(date)="data" >
        {{ formatDateTime(data.value) }} - {{ data.item.name }} ({{ data.item.total_cases }} cases)
      </template>
    </b-table>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      sortBy: 'total_cases',
      sortDesc: true,
      fields: [
        { 
          key: 'date',
          label: 'Detail',
          sortable: true,
          sortByFormatted: (value, key, item) => { 
            return `${item.date}-${item.total_cases.padStart(10, '0')}`
          },
        },
      ],
      items: [
        { date: new Date(2021, 1, 1), name: 'Selangor', total_cases: '1000' },
        { date: new Date(2021, 1, 1), name: 'Kuala Lumpur', total_cases: '1000' },
        { date: new Date(2021, 2, 1), name: 'Selangor', total_cases: '2000' },
        { date: new Date(2021, 2, 1), name: 'Kuala Lumpur', total_cases: '3000' },
        { date: new Date(2021, 3, 1), name: 'Selangor', total_cases: '5000' },
        { date: new Date(2021, 3, 1), name: 'Kuala Lumpur', total_cases: '1000' },
      ]
    }
  },
  methods: {
    formatDateTime(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return date.toLocaleString(undefined, options)
    }
  }
}
</script>