export default function handler(req,res) {
    return res.status(200).json('getting one products ' + req.query.id);
}