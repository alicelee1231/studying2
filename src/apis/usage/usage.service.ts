import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usage } from './entities/usage.entity';

@Injectable()
export class UsageService {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>,
  ) {}

  async count() {
    return await this.usageRepository.count();
  }

  async findPage({ page }) {
    return await this.usageRepository.find({
      order: {
        id: 'DESC',
      },
      skip: (page - 1) * 10,
      take: 10,
    });
  }

  async findOne(id) {
    return await this.usageRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(createUsageInput) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
    return await this.usageRepository.save({
      createdAt: currentDate,
      ...createUsageInput,
    });
  }
}
