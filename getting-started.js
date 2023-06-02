console.log("hello")
import mongoose from "mongoose"

const mongoUri = 'mongodb://127.0.0.1:27017'
const main = async () => {
  await mongoose.connect(mongoUri)
  console.log(`connected to mongo ${mongoUri}`)
  //define schema
  const kittySchema = new mongoose.Schema({
    name: { type: String, required: true },
    // name: String
  })
kittySchema.methods.speak = function () {
  const greeting = this.name ? 'Meow my name is ' + this.name : 'I have no name'
  console.log(greeting)
}
  const Kitten = mongoose.model('Kitten model', kittySchema)

  // const silence = new Kitten({name: 'Silence'})
  // const noise = new Kitten({name: 'Noise'})
  // const noname = new Kitten()

  // console.log(silence)
  // console.log(silence.name, noise.name)
  // silence.speak()
  // noname.speak()

  // await noname.save()
  // await silence.save()
  // await noise.save()

  // const kittyClub = await Kitten.find()
  // const kittyClub = await Kitten.find({name: 'Silence'})
  // const singleKitty = await Kitten.findOne({name: 'Silence'})
  // console.log('Welcome', kittyClub)
  // console.log('Welcome', singleKitty)

  // singleKitty.name = 'Not Silence'
  // await singleKitty.save()
  // console.log('Welcome', singleKitty)


  // const singleKitty = await Kitten.findByIdAndUpdate('id123', {name:'Silence'})
  // const singleKitty = await Kitten.findOneAndUpdate(
  //   {name: 'Quiet'},
  //   {name: 'New True'}, {new: true}
  //   )

  // const singleKitty = await Kitten.findOne({_id:'64797e62b6d5661a276d4365'})
  // const singleKittyById = await Kitten.findById('64797e62b6d5661a276d4365')

  // console.log('Welcome', singleKitty)
  // console.log('Welcome', singleKittyById)

//  await Kitten.findByIdAndDelete('647985b0e50e5e00772a75d8')
//  console.log('Welcome', kittyClub)

await Kitten.create({name: 'Ninja'})
const kittyClub = await Kitten.find()
console.log('Welcome', kittyClub)
}

main().catch(e => console.log(e))
