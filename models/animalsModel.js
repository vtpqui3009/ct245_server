const mongoose = require("mongoose");
const Schema = mongoose.SChema;
const conversationStatus = new Schema({
  iucn: {
    type: String,
    vietnamese: "Tình trạng bảo tồn theo ICUN",
    require: true,
  },
  redBook: {
    type: String,
    vietnamese: "Tình trạng bảo tồn theo sách đỏ việt ",
    require: true,
  },
  decree32: {
    type: String,
    vietnamese: "Tình trạng bảo tồn theo Nghị định 32 ",
    require: true,
  },
  cities: {
    type: String,
    vietnamese: "Tình trạng bảo tồn theo CITIES",
    require: true,
  },
});

const AnimalsModel = new Schema({
  scienceName: {
    type: String,
    vietnamese: "Tên Khoa Học",
    require: true,
  },
  vietnameseName: {
    type: String,
    vietnamese: "Tên Tiếng Việt",
    require: true,
  },
  localName: {
    type: String,
    vietnamese: "Tên Địa Phương",
    require: true,
  },
  kingdom: {
    type: String,
    vietnamese: "Giới",
    require: true,
  },
  phylum: {
    type: String,
    vietnamese: "Ngành",
    require: true,
  },
  class: {
    type: String,
    vietnamese: "Lớp",
    require: true,
  },
  order: {
    type: String,
    vietnamese: "Bộ",
    require: true,
  },
  family: {
    type: String,
    vietnamese: "Họ",
    require: true,
  },
  media: {
    type: Array,
    vietnamese: "Image/Video",
  },
  ecologicalCharacteristics: {
    type: String,
    vietnamese: "Đặc điểm sinh thái",
    require: true,
  },
  morphologicalCharacteristics: {
    type: String,
    vietnamese: "Đặc điểm hình thái",
    require: true,
  },
  useValue: {
    type: String,
    vietnamese: "Giá trị sử dụng ",
    require: true,
  },
  conservationStatus: {
    type: [conversationStatus],
  },
  distribution: {
    type: String,
    vietnamese: " Phân bố ",
    require: true,
  },
  coordinates: {
    type: String,
    vietnamese: " Tọa độ ",
    require: true,
  },
  specimenCondition: {
    type: String,
    vietnamese: " Tình trạng mẫu vật ",
    require: true,
  },
  habitat: {
    type: String,
    vietnamese: "Sinh cảnh ",
    require: true,
  },
  place: {
    type: String,
    vietnamese: " Địa điểm",
    require: true,
  },
  sampleCollectionDate: {
    type: String,
    vietnamese: "Ngày thu mẫu",
    require: true,
  },
  sampleCollector: {
    type: String,
    vietnamese: " Người thu mẫu ",
    require: true,
  },
});
module.exports = mongoose.model("Animals", AnimalsModel);
