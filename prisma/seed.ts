import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'eed19e02-a705-498a-b451-d278353fab20',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'teste',
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database Seeded')
  prisma.$disconnect()
})
