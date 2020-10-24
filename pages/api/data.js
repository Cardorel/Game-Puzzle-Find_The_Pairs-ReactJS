import {imgs} from '../../COMPONENTS/INTERFACE/data'

export default async function (req, res) {
  res.status(200).json({ imgs })
}
