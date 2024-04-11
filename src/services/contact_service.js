const DuplicateEntry = require("../errors/duplicate_entry_error");
const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class ContactService {
  constructor(repository) {
    this.contactRepository = repository;
  }

  async getEntries() {
    try {
      const res = await this.contactRepository.getEntries();
      if (!res) {
        throw new NotFoundError("Contact", "text", "*");
      }
      return res;
    } catch (error) {
      if (error.name === "NotFoundError") {
        throw error;
      }
      console.log("Contact Service: ", error);
      throw new InternalServerError();
    }
  }

  async addEntry(data) {
    try {
      const res = await this.contactRepository.addEntry(
        data.name,
        data.email,
        data.dialcode,
        data.phone
      );
      return res;
    } catch (error) {
      if (error.name == "MongoServerError") {
        throw new DuplicateEntry();
      }
      throw new InternalServerError();
    }
  }

  async updateEntry(id, updateObj) {
    try {
      const res = await this.contactRepository.updateEntry(id, updateObj);
      return res;
    } catch (error) {
      console.log("Contact Service: ", error);
      throw new InternalServerError();
    }
  }

  async deleteEntry(id) {
    try {
      const res = await this.contactRepository.deleteEntry(id);
      return res;
    } catch (error) {
      console.log("Contact Service: ", error);
      throw new InternalServerError();
    }
  }
}

module.exports = ContactService;
