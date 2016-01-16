json.users @users do |user|
  json.id user.id 
  json.name user.name
  json.gender user.gender
  json.weight user.weight
  json.over_21 user.over_21
end